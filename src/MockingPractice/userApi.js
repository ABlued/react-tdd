import { isLoggedIn } from './middlewares';
import { addFollowing } from './user';

// post user/1/follow -> 사용자가 상대방을 팔로우 요청 시 동작하는 롸우터
router.post('/:id/follow', isLoggedIn, addFollowing);
