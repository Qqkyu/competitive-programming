/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const uniqueEmails = new Set();
  emails.forEach((email) => {
    uniqueEmails.add(findForwardAddress(email));
  });
  return uniqueEmails.size;
}

function findForwardAddress(email) {
  const [localName, domainName] = email.split("@");
  let forwardAddress = "";
  for (let i = 0; i < localName.length; ++i) {
    if (localName[i] === "+") {
      break;
    }
    if (localName[i] !== ".") {
      forwardAddress += localName[i];
    }
  }
  return forwardAddress + "@" + domainName;
}
