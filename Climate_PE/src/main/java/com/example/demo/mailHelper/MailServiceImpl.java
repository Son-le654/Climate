package com.example.demo.mailHelper;

import java.io.File;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {

	@Autowired
	private JavaMailSender mailSender;
	@Value("${spring.mail.username}")
	private String sender;

	@Override
	public String sendMail(MailDetail mailDetail) {
		try {
			// Creating a simple mail message object
			SimpleMailMessage mailMessage = new SimpleMailMessage();

			// Setting up necessary details of mail
			mailMessage.setFrom(sender);
			mailMessage.setTo(mailDetail.getRecipient());
			mailMessage.setSubject(mailDetail.getSubject());
			mailMessage.setText(mailDetail.getMsgBody());

			// Sending the email
			mailSender.send(mailMessage);
			return "sent success";

		} catch (Exception e) {
			// TODO: handle exception
			return "Error while Sending email!!!";
		}
	}

	@Override
	public String sendMailWithAttachment(MailDetail mailDetail) {
		// Creating a Mime Message can send attachment, special character encoding....
				MimeMessage mimeMessage = mailSender.createMimeMessage();
				MimeMessageHelper mimeMessageHelper;
				
				try {
					// Setting multipart as true for attachment to be send
					mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
					mimeMessageHelper.setFrom(sender);
					mimeMessageHelper.setTo(mailDetail.getRecipient());
					mimeMessageHelper.setSubject(mailDetail.getSubject());
					mimeMessageHelper.setText(mailDetail.getMsgBody());
					
					//add file attachment
					FileSystemResource file = new FileSystemResource(new File(mailDetail.getAttachment()));
					
					mimeMessageHelper.addAttachment(file.getFilename(), file);
					
					//sending
					mailSender.send(mimeMessage);
					return "sent success";
				} catch (Exception e) {
					// TODO: handle exception
					return "Error while Sending email!!!";
				}
	}

}
