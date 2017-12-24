package sankutyu.api.top;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sankutyu.model.user.User;

@RestController
public class TopContoroller {
	
	@ResponseBody
	@PostMapping("/")
	public User topPost(){
		return new User();
	}
	
	@ResponseBody
	@GetMapping("/")
	public User topGet(){
		return new User();
	}
	
	@GetMapping("/hello")
	public String hello(){
		return "hello";
	}
}
