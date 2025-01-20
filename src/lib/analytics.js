export const FB_PIXEL_ID = "1094426328466571" // Replace with your Facebook Pixel ID

export const fbPageView = () => {
  window.fbq('track', 'PageView')
}

export const fbEvent = (name, options = {}) => {
  window.fbq('track', name, options)
}
