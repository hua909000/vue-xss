export default {
  // 通过 whiteList 来指定白名单，格式为：{'标签名': ['属性1', '属性2']}
  // 不在白名单上的标签将被过滤，不在白名单上的属性也会被过滤

  whiteList: {
    a: ['href', 'target', 'download', 'type', 'style'],
    iframe: ['src', 'width', 'height', 'class', 'style', 'frameborder', 'allowfullscreen'],
    table: ['style', 'border', 'cellspacing', 'cellpadding'],
    img: ['src', 'width', 'alt', 'style'],
    video: ['src', 'autoplay', 'controls', 'height', 'loop', 'muted', 'poster', 'preload', 'width'],
    audio: ['src', 'autoplay', 'controls', 'loop', 'muted', 'preload'],
    blockquote: [],
    pre: [],
    code: []
    // ...
  },
  stripIgnoreTag: true, // 去掉不在白名单上的标签   true：去掉不在白名单上的标签
  stripIgnoreTagBody: ['script', 'style'] // 去掉不在白名单上的标签及标签体   ['tag1', 'tag2']：仅去掉指定的不在白名单上的标签
}
