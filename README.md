# UIKIT

how to install
npm i @drinkbetter-ai/utils@latest

the way to use common css blocks
@import '@drinkbetter-ai/utils/scss/common';

The way to test package: inside cloned version run:
1 npm run build;
2 yalc publish --push

then with yalc you will have something like @drinkbetter-ai/utils but only for your system,
so for its usage: inside your app run:

3 yalc link @drinkbetter-ai/utils

---

### components

button, input, checkbox. tooltip, radio, menu, popover, select, form, label, modal, loading
table, textarea, toast, skeleton, toggle, NotFound, Error boundry, confirm, Image, suspender

### js helpers

1 usecrud: handle create/read/update/delete, do optimistic update, toast messages, handle exceptions, do caching, manage query keys
2 createApiInstance: manipulating response, injecting bearer tokan, do refresh token, having types
3 Bootstrap grid system
4 custom hooks
