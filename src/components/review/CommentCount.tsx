interface Props {
    commentCount: number
}

function CommentCount({commentCount}: Props) {
    return <span
        className={"text-white text-opacity-50 text-[0.875rem] leading-[1.035rem]"}>{commentCount} отзывов</span>
}

export default CommentCount
