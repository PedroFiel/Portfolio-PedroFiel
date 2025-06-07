export function toggleDropdown(dropdown) {
    if (dropdown.hasAttribute('data-closed')) return openDropdown(dropdown);
    closeDropdown(dropdown);
}

export function openDropdown(dropdown) {
    dropdown.style.height = '0px';
    dropdown.removeAttribute('data-closed');
    const height = dropdown.scrollHeight;
    dropdown.style.height = height + 'px';

    dropdown.addEventListener('transitionend', () => {
        dropdown.style.height = 'auto';
    }, { once: true });
}

export function closeDropdown(dropdown) {
    const height = dropdown.scrollHeight;
    dropdown.style.height = height + 'px';
    dropdown.offsetHeight;
    if (dropdown.getAttribute('data-min-height')) {
        dropdown.style.height = dropdown.getAttribute('data-min-height');
    } else {
        dropdown.style.height = '0px';
    }
    dropdown.setAttribute('data-closed', '');

    dropdown.addEventListener('transitionend', () => {
        dropdown.style.height = '';
    }, { once: true });
}