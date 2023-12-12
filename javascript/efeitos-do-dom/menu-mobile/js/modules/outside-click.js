export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data=outside';

    if(!element.hasAttribute(outside)) {
        events.forEach(userEvents => {
            html.addEventListener(userEvents, handleOutsideClick);
        });
        element.setAttribute(outside, '');
    };
    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outside, '');
            html.removeEventListener('click', handleOutsideClick);
            callback();
        };
    };
};