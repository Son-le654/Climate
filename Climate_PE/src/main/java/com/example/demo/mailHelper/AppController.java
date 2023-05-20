//package com.example.demoEmail;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//@Controller
//public class AppController {
//
//	@Autowired
//	private JavaMailSender mailSender;
//
//	@GetMapping("")
//	public String viewHomePage() {
//		return "index";
//	}
//
//	@GetMapping("/send_text_email")
//	public String sendPlainText(Model model) {
//		String from = "hodacdat123@gmail.com";
//		String to = "hodacdat12345@gmail.com";
//
//		SimpleMailMessage mailMessage = new SimpleMailMessage();
//		mailMessage.setFrom(from);
//		mailMessage.setTo(to);
//		mailMessage.setSubject("test mail from spring");
//		mailMessage.setText("test mail by controller");
//		
//		mailSender.send(mailMessage);
//		
//		return "result";
//	}
//}
