export const newContactMail = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Notification</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: white;
      font-family: Arial, sans-serif;
    "
  >
    <table
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0; padding: 0"
    >
      <tr>
        <td align="center" style="padding: 20px 0">
          <table
            width="600"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #f9fafb;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            "
          >
            <!-- Header -->
            <tr>
              <td
                align="center"
                style="height: 48px; background-color: #f9fafb"
              >
                <img
                  style="
                    padding: 12px 48px;
                    border-radius: 50px;
                    height: 158px;
                  "
                src="https://res.cloudinary.com/dcb4ilgmr/image/upload/v1729544814/utilities/templates/GetBee_1_bxzwaf.png"
                alt="">
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 32px">
                <h1
                  style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 16px;
                  "
                >
                  Hello {{name}},
                </h1>
                <p style="font-size: 18px; color: #4b5563; margin-bottom: 32px">
                  You have a new submission by a potential client at Salford
                  Studio. Login to your dashboard to see it.
                </p>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center">
                      <a
                        href="{{url}}"
                        style="
                          display: inline-block;
                          background-color: #f48c04;
                          color: white;
                          text-decoration: none;
                          padding: 12px 48px;
                          border-radius: 12px;
                          font-size: 18px;
                          font-weight: 500;
                          transition: background-color 0.3s;
                        "
                      >
                        Login
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  background-color: #f48c04;
                  color: white;
                  padding: 16px;
                  text-align: center;
                  font-size: 14px;
                "
              >
                <p style="margin: 4px 0">
                  23 Goto Street PMB 5768, San Francisco, CA 54533
                </p>
                <p style="margin: 4px 0">
                  © 2024 your brand. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>


`;