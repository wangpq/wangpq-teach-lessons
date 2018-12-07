export function pushHistory(title) {
  if (window.history && window.history.pushState) {
    const state = {
      title: title,
      url: window.location.href
    }
    window.history.pushState(state,title,window.location.href); 
  }
}