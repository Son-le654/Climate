package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.CheckinDTO;
import com.example.demo.entity.Checkin;
import com.example.demo.service.CheckinService;
import com.example.demo.service.InternalService;

@RestController
@RequestMapping("/checkin")
@CrossOrigin(origins = { "http://clinicmates.io.vn/", "http://localhost:3000/" })
public class CheckinController {

	@Autowired
	private CheckinService checkinService;

	@Autowired
	private InternalService internalService;

	@PostMapping("/save")
	public String save(@RequestBody CheckinDTO checkinDTO) {
		System.out.println(checkinDTO.getIdC());
		System.out.println(checkinDTO.getIdA());

		// validate
//		if (appointmentDTO.getName() == "" || appointmentDTO.getPhone() == "" || appointmentDTO.getBirthday() == ""
//				|| appointmentDTO.getGender() == "" || appointmentDTO.getBookPlace() == ""
//				|| appointmentDTO.getSpec() == "" || appointmentDTO.getDoctorName() == ""
//				|| appointmentDTO.getBookDate() == "" || appointmentDTO.getBookTime() == ""
//				|| appointmentDTO.getIdC() == "") {
//			return "Invalid data, please fill all data";
//		}

		String result = checkinService.save(checkinDTO);
		if (result.equals("success")) {
			return "success";
		} else {
			return result;
		}
	}
	
	@PutMapping("/update")
	public String update(@RequestBody Checkin checkin) {
		checkinService.update(checkin);
		return "success";
	}

	@GetMapping("/list")
	public List<Checkin> getAll() {
		return checkinService.findAll();
	}

	@GetMapping("/listBypaintedId")
	public List<Checkin> getByPaintedId(@RequestParam("painted_id") String paintedId) {
		return checkinService.findByPaintedId(paintedId);
	}

	@GetMapping("/listbydoctorid")
	public List<Checkin> getByDoctorId(@RequestParam("doctorId") String doctorId) {
		return checkinService.findByDoctorId(doctorId);
	}

	@GetMapping("/listiancomebydoctorid")
	public List<Checkin> getIncomeByDoctorId(@RequestParam("doctorId") String doctorId) {
		return checkinService.findIncomeByDoctorId(doctorId);
	}

	@GetMapping("/listIncome")
	public List<Checkin> getAllIncome() {
		return checkinService.findAllNotApprove();
	}

//	@GetMapping("/{id}")
//	public ResponseEntity<Appointment> getAppointmentById(@PathVariable(value = "id") Integer id) {
//		Optional<Appointment> appointment = appointmentService.findById(id);
//		if (appointment.isPresent()) {
//			return ResponseEntity.ok().body(appointment.get());
//		} else {
//			return ResponseEntity.notFound().build();
//		}
//	}

	@PutMapping("/commandFlag")
	public ResponseEntity<String> updateCommandFlag(@RequestParam("checkinid") int checkinid,
			@RequestParam("command") String command) {
		try {
			// Get the appointment by its ID
			Optional<Checkin> optionalCheckin = checkinService.findById(checkinid);

			if (optionalCheckin.isPresent()) {
				Checkin checkin = optionalCheckin.get();

				// Update the commandFlag based on the input
				if (command.equalsIgnoreCase("cancel")) {
					checkin.setCommandFlag(2);
				} else if (command.equalsIgnoreCase("completed")) {
					checkin.setCommandFlag(1);
				} else {
					return ResponseEntity.badRequest().body("Invalid command.");
				}

				// Save the updated appointment
				checkinService.saveCheckin(checkin);

				return ResponseEntity.ok("CommandFlag updated successfully.");
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
		}
	}
}
