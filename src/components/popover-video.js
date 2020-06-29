import React from "react"
import { Helmet } from "react-helmet"

const PopoverVideo = ({ children, videoId }) => (
  <>
    <Helmet>
      <script
        src={`https://fast.wistia.com/embed/medias/${videoId}.jsonp`}
        async
      />
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async />
    </Helmet>
    <span
      className={`wistia_embed wistia_async_${videoId} popover=true popoverContent=link`}
    >
      {children}
    </span>
  </>
)

export default PopoverVideo
