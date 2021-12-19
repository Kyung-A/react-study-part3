// 현재 useBlocker 및 usePrompt Hook은 사라졌다
import { useContext, useEffect, useCallback } from 'react';
// NavigationContext는 navigator를 제공
// useNavigation은 NavigationContext를 사용하여 navigator를 가져오는거라고 함
// 보통은 useNavigatiom를 사용하기 때문에 직접 쓸 일은 없다고한다
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

// when 파라미터는 프롬포트 창 활성화 여부

export function useBlocker(blocker, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    // when이 false면 return
    if (!when) return;

    // tx 파라미터에는 action, loaction, retry 정보?들이 담겨져있다
    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        // 페이지를 벗어나면 실행
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(message, when = true) {
  const blocker = useCallback(
    (tx) => {
      //   eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry();
    },
    [message],
  );

  useBlocker(blocker, when);
}
