export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Welcome Email</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f5f7fa;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden;">
    <tr>
      <td style="background-color:#1e90ff; padding:24px; text-align:center;">
        <h1 style="margin:0; font-size:28px; color:#ffffff;">
          Welcome <span style="color:#e0f0ff;">${name}</span> to Chatify
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px; color:#333333;">
        <p style="font-size:16px; line-height:1.5; margin-top:0;">
          We’re thrilled you’ve decided to join <strong>Chatify</strong>, the place where meaningful connections happen.
          Here you can share, chat, and build your network in a fun and engaging way.
        </p>

        <h2 style="font-size:20px; margin-top:24px; color:#1e90ff;">Getting Started 🚀</h2>
        <ol style="font-size:15px; line-height:1.6; padding-left:20px; color:#444444;">
          <li><strong>Set your profile picture</strong> to let others recognize you instantly.</li>
          <li><strong>Search and connect</strong> with people who share your interests.</li>
          <li><strong>Start a conversation</strong> and break the ice with a friendly message.</li>
          <li><strong>Share a photo or video</strong> to show a bit of your world.</li>
        </ol>

        <p style="margin-top:24px; font-size:15px; color:#555555;">
          We can’t wait to see how you’ll make Chatify your own. Jump in and start exploring today!
        </p>

        <div style="text-align:center; margin-top:30px;">
          <a href=${clientURL} 
             style="background-color:#1e90ff; color:#ffffff; text-decoration:none; 
                    padding:12px 24px; border-radius:6px; font-size:16px;">
            Go to Chatify
          </a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}