package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.NewsDetail;
import com.example.demo.service.NewsDetailService;

import java.util.List;

@RestController
@RequestMapping("/news")
@CrossOrigin("http://localhost:3000/")
public class NewsDetailController {
	private final NewsDetailService newsDetailService;

	@Autowired
	public NewsDetailController(NewsDetailService newsDetailService) {
		this.newsDetailService = newsDetailService;
	}

	@GetMapping("/{id}")
	public ResponseEntity<NewsDetail> getNewsDetail(@PathVariable Long id) {
		NewsDetail newsDetail = newsDetailService.getNewsDetail(id);
		if (newsDetail != null) {
			return ResponseEntity.ok(newsDetail);
		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping
	public List<NewsDetail> getAllNewsDetails() {
		return newsDetailService.getAllNewsDetails();
	}

	@PostMapping
	public ResponseEntity<NewsDetail> createNewsDetail(@RequestBody NewsDetail newsDetail) {
		NewsDetail createdNewsDetail = newsDetailService.createNewsDetail(newsDetail);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdNewsDetail);
	}

	@PutMapping("/{id}")
	public ResponseEntity<NewsDetail> updateNewsDetail(@PathVariable Long id,
			@RequestBody NewsDetail updatedNewsDetail) {
		NewsDetail newsDetail = newsDetailService.getNewsDetail(id);
		if (newsDetail != null) {
			updatedNewsDetail.setId(id);
			NewsDetail updatedEntity = newsDetailService.updateNewsDetail(updatedNewsDetail);
			return ResponseEntity.ok(updatedEntity);
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteNewsDetail(@PathVariable Long id) {
		NewsDetail newsDetail = newsDetailService.getNewsDetail(id);
		if (newsDetail != null) {
			newsDetailService.deleteNewsDetail(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("/random")
	public List<NewsDetail> getRandomNews() {
		return newsDetailService.getRandomNews();
	}
}