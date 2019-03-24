let copyCodeBtn = document.querySelector('#js-emailcopybtn');
let emailLink = document.querySelector('#code-to-copy');
const initContent = emailLink.textContent;

copyCodeBtn.addEventListener('click', function(event)
{
    // Select the email link anchor text
  emailLink.insertAdjacentText('beforeend','@me.com');
  emailLink = document.querySelector('#code-to-copy');
  let range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try
    {
        // Now that we've selected the anchor text, execute the copy command
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
    }
    catch (err)
    {
        console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
    emailLink.textContent = initContent;
});
