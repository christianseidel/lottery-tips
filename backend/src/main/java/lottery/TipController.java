package lottery;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TipController {
    TipService service = new TipService();

    @PostMapping("/tips/{id}")
    public TipOfLotto getTipOfLotto(@PathVariable int id) {
        return service.createTipOfLotto(id);
    }

    @GetMapping("/tips")
    public String sagWas() {
        return "Hallo! Hier fummpt es...";
    }
}
