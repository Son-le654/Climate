package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DTO.AppointmentDTO;
import com.example.demo.entity.Appointment;
import com.example.demo.service.AppointmentService;

@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = { "http://clinicmates.io.vn/", "http://localhost:3000/" })
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@PostMapping("/save")
	public String save(@RequestBody AppointmentDTO appointmentDTO) {
		System.out.println(appointmentDTO.getIdC());

		// validate
		if (appointmentDTO.getName() == "" || appointmentDTO.getPhone() == "" || appointmentDTO.getBirthday() == ""
				|| appointmentDTO.getGender() == "" || appointmentDTO.getBookPlace() == ""
				|| appointmentDTO.getSpec() == "" || appointmentDTO.getDoctorName() == ""
				|| appointmentDTO.getBookDate() == "" || appointmentDTO.getBookTime() == ""
				|| appointmentDTO.getIdC() == "") {
			return "Invalid data, please fill all data";
		}

		String result = appointmentService.save(appointmentDTO);
		if (result.equals("success")) {
			return "success";
		} else {
			return result;
		}
	}

	@PostMapping("/saveguest")
	public String saveGuest(@RequestBody AppointmentDTO appointmentDTO) {

		// validate
		if (appointmentDTO.getName() == "" || appointmentDTO.getPhone() == "" || appointmentDTO.getBirthday() == ""
				|| appointmentDTO.getGender() == "" || appointmentDTO.getBookPlace() == ""
				|| appointmentDTO.getSpec() == "" || appointmentDTO.getDoctorName() == ""
				|| appointmentDTO.getBookDate() == "" || appointmentDTO.getBookTime() == "") {
			return "Invalid data, please fill all data";
		}

		String result = appointmentService.saveGuest(appointmentDTO);
		if (result.equals("success")) {
			return "success";
		} else {
			return result;
		}
	}

	@GetMapping("/list")
	public List<Appointment> getAll() {
		return appointmentService.findAll();
	}

	@GetMapping("/listBypaintedId")
	public List<Appointment> getByPaintedId(@RequestParam("painted_id") String paintedId) {
		return appointmentService.findByPaintedId(paintedId);
	}

	@GetMapping("/listIncome")
	public List<Appointment> getAllIncome() {
		return appointmentService.findAllNotApprove();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable(value = "id") Integer id) {
		Optional<Appointment> appointment = appointmentService.findById(id);
		if (appointment.isPresent()) {
			return ResponseEntity.ok().body(appointment.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/commandFlag")
	public ResponseEntity<String> updateCommandFlag(@RequestParam("appointmentId") int appointmentId,
			@RequestParam("command") String command) {
		try {
			// Get the appointment by its ID
			Optional<Appointment> optionalAppointment = appointmentService.findById(appointmentId);

			if (optionalAppointment.isPresent()) {
				Appointment appointment = optionalAppointment.get();

				// Update the commandFlag based on the input
				if (command.equalsIgnoreCase("cancel")) {
					appointment.setCommandFlag(2);
				} else if (command.equalsIgnoreCase("approve")) {
					appointment.setCommandFlag(1);
				} else {
					return ResponseEntity.badRequest().body("Invalid command.");
				}

				// Save the updated appointment
				appointmentService.saveAppointment(appointment);

				return ResponseEntity.ok("CommandFlag updated successfully.");
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
		}
	}
}
