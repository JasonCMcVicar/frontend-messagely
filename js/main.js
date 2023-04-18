"use strict";

const $body = $("body");

const $conversationsLoading = $("#conversations-loading");
const $conversationsList = $("#conversations-list");

const $messagesLoading = $("#messages-loading");
const $messagesList = $("#messages-list");

const $msgLoading = $("#msg-loading");
const $msgDetail = $("#msg-detail");

const $newMsgForm = $("#new-message-form");
const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

/** Hide individual page components to start so we can manually choose which to
 * display later.
 */
function hidePageComponents() {
    const components = [
        $conversationsList,
        $messagesList,
        $msgDetail,
        $newMsgForm,
        $loginForm,
        $signupForm,
    ];
    components.forEach(c => c.hide());
}