import React, { useEffect } from 'react'
import ThreadDetail from '../components/ThreadDetail'
import Sidebar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateComment, asyncDownVoteThreadDetail, asyncNeutralizeVoteThreadDetail, asyncReceiveThreadDetail, asyncUpVoteThreadDetail } from '../states/threadDetail/action';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';

function DetailPage() {
    const { threadId } = useParams();
    const threadDetail = useSelector(state => state.threadDetail)
    const authUser = useSelector(state => state.authUser)

    const dispatch = useDispatch();
    const onCommentSubmit = (content) => {
        dispatch(asyncCreateComment({ content }));
    };
    const onUpVoteThreadDetail = () => {
        dispatch(asyncUpVoteThreadDetail());
    };

    const onDownVoteThreadDetail = () => {
        dispatch(asyncDownVoteThreadDetail());
    };

    const onNeturalizeVoteThreadDetail = () => {
        dispatch(asyncNeutralizeVoteThreadDetail());
    };

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(threadId))
    }, [threadId, dispatch]);

    if (!threadDetail) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className="flex-1 p-6 sm:mb-0 mb-16">
                <ThreadDetail
                    {...threadDetail}
                    authUser={authUser.id}
                    upVoteThreadDetail={onUpVoteThreadDetail}
                    downVoteThreadDetail={onDownVoteThreadDetail}
                    neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
                />
                <CommentInput addComment={onCommentSubmit} />
                <h1>Komentar ({threadDetail.comments.length})</h1>
                <CommentList comments={threadDetail.comments} />
            </div>
        </>
    )
}

export default DetailPage