import { atom } from "recoil";
import { useRecoilState, useRecoilValue } from "recoil";

type LoadingTyep = {
  loading: boolean;
};

const loadingState = atom<LoadingTyep>({
  key: "loadingState",
  default: {
    loading: false,
  },
});

export const useLoading = () => {
  const [state, setState] = useRecoilState<LoadingTyep>(loadingState);
  const start = () => {
    setState({ ...state, ...{ loading: true } });
  };
  const stop = () => {
    setState({ ...state, ...{ loading: false } });
  };
  return { start, stop };
};

export const Loading = () => {
  const state = useRecoilValue<LoadingTyep>(loadingState);
  if (!state.loading) {
    return <></>;
  }
  return (
    <div>
      <img src="images/team_logo.png" alt="loading" />
      <div>Loding...</div>
    </div>
  );
};
export default Loading;
