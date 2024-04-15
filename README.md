# Irish Passport WebChat Automator

**Get in touch with the DFE without losing your mind**


[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://donate.stripe.com/6oE7ue8n57wk4PS7ss)

If you've ever had to deal with the Irish passport service, you'll know how hard they are to get hold of. Their WebChat service is always unavailable because of the number of users trying to get in touch, so you have to sit there refreshing the page until you get a slot.

The Irish Passport WebChat Automator lets you get your place in the queue, without the effort, in 3 easy steps:

- ### Clone the repo
        `git clone https://github.com/lewisdonovan/irish-passport-webchat-automator.git`

- ### Install the dependencies
        `npm install` or `yarn`

 - ### Run the script
        `node index.js`

A browser window will open at the DFE Passport contact page, check if the WebChat is available and alert you if so. If it's not available, the browser window will close and the process will start again, repeating until the chat session is available.

## Customisation

The browser window will pop-up in the foreground of your screen, each time it opens. If you want to run it in the background, follow the info in [this Stack Overflow answer](https://stackoverflow.com/a/60590136/7546845).

the [`puppeteerConfig`](https://github.com/lewisdonovan/irish-passport-webchat-automator/blob/db12ace328d2c9666322c146c6ec336ad40ac7db/index.js#L8), [userAgent string](https://github.com/lewisdonovan/irish-passport-webchat-automator/blob/db12ace328d2c9666322c146c6ec336ad40ac7db/index.js#L16) and [request headers](https://github.com/lewisdonovan/irish-passport-webchat-automator/blob/db12ace328d2c9666322c146c6ec336ad40ac7db/index.js#L23) can be edited to whatever you need, you'll find them in the [`index.js`](https://github.com/lewisdonovan/irish-passport-webchat-automator/blob/main/index.js) file. The script is pretty simple, feel free to make your own forks or to add functionality via PRs.