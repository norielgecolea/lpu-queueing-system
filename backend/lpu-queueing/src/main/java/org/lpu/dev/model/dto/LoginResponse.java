package org.lpu.dev.model.dto;

public class LoginResponse {

	private boolean success;
	private String message;
	private String role;
	private String fullName;

	public LoginResponse() {
	}

	public LoginResponse(boolean success, String message, String role, String fullName) {
		this.success = success;
		this.message = message;
		this.role = role;
		this.fullName = fullName;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
}