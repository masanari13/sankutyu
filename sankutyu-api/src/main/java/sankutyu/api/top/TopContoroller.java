package sankutyu.api.top;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TopContoroller {
	
	@RequestMapping("/")
	@ResponseBody
	public String top(){
		return "top Page";
	}
	
	@GetMapping("/hello")
	public String hello(){
		return "hello";
	}
}
