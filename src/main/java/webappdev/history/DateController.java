package webappdev.history;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api")
public class DateController {

    private final DateService dateService;

    @Autowired
    public DateController(DateService dateService) {
        this.dateService = dateService;
    }

    @GetMapping("/date/all")
    public ResponseEntity<List<Date>> getAllDates() {
        List<Date> dates = dateService.getAllDates();
        return new ResponseEntity<>(dates, HttpStatus.OK);
    }

    @PostMapping("/date/post")
    public List<Date> getUserDates(@RequestBody Date date) {
        return dateService.getDatesByUserId(date.getUid());
    }

    @PostMapping("date/add")
    public ResponseEntity<Date> addDate(@RequestBody Date date) {
        Date savedDate = dateService.saveDate(date);
        return new ResponseEntity<>(savedDate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDate(@PathVariable Long id) {
        boolean result = dateService.deleteDateById(id);
        if (result) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}