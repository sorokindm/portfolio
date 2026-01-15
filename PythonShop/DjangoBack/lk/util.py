import smtplib

from email.message import EmailMessage

def sendMessageWithCode(to, subject, code):
    """Отправка электронной почты с кодом подтверждения"""
    msg = EmailMessage()
    msg.set_content(code)
    msg['Subject'] = subject
    msg['From'] = "easy@eshop.ru"
    msg["To"] = to

    s=smtplib.SMTP('localhost:1025')
    s.send_message(msg)
    s.quit()

def sendMessageWithOrder(to, subject, text):
    """Отправка электронной почты с заказом"""
    msg = EmailMessage()
    msg.set_content(text)
    msg['Subject'] = subject
    msg['From'] = "easy@eshop.ru"
    msg["To"] = to

    s=smtplib.SMTP('localhost:1025')
    s.send_message(msg)
    s.quit()