import popup from './popup.vue'

var Pop = Vue.extend(popup);
const initInstance = () => {
  instance = new Pop({
    el: document.createElement('div')
  });
  instance.callback = defaultCallback;
};
const showNextMsg = () => {
  if (!instance) {
    initInstance();
  }
  instance.action = '';
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
  });
};