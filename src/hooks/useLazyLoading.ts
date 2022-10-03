import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { loadingUsers } from '../redux/usersReducer/actions';
import { loadingSelector } from '../redux/usersReducer/selectors';
import { useAppSelector } from './useAppSelector';

export const useLazyLoading = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  const loading = useAppSelector(loadingSelector);
  const dispatch = useDispatch();

  const scrollObserver = useCallback((node: Element) => {
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.75) {
          dispatch(loadingUsers({ page: currentPage, results: 10 }));
          setCurrentPage((prev) => prev + 1);
          observer.unobserve(node);
        }
      });
    }, { threshold: 1 }).observe(node);
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (bottomBoundaryRef.current?.lastElementChild && !loading) {
      scrollObserver(bottomBoundaryRef.current.lastElementChild);
    }
  }, [loading, scrollObserver]);
  return bottomBoundaryRef;
};
