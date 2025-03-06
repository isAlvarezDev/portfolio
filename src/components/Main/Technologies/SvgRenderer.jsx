export const SvgRenderer = ({ base64Data }) => {
    const decodedSvg = atob(base64Data)
    return <div dangerouslySetInnerHTML={{__html: decodedSvg}} className="skill-image-container"></div>
}