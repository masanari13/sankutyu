package sankutyu.model.user;

public class User {
	Integer userId;
	String username;
	
	public User(){
		this.userId=1;
		this.username="鎌田";
	}
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
