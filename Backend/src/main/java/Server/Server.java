package Server;

import com.google.gson.Gson;

import java.util.*;
import static spark.Spark.*;
public class Server {
    static Map<String,String> users = new HashMap<>(); //For Login, hardcoding

    private static List<String> notes = new ArrayList<>();

    public static void main(String[] args){

        //Set up users
        users.put("userA", "abc");
        users.put("userB", "def");

        Gson gson = new Gson();
        port(4000);

        post("/api/authenticate", (req, res) -> {
            String bodyString = req.body();
            LoginDto loginDto = gson.fromJson(bodyString, LoginDto.class);
            String password = users.get(loginDto.username);
            if (password == null){
                LoginResponseDto responseDto = new LoginResponseDto(false, "user not found");
                return gson.toJson(responseDto);

            }
            if (!password.equals(loginDto.password)){
                LoginResponseDto responseDto
                        = new LoginResponseDto(false,  "password is incorrect");
                return gson.toJson(responseDto);

            }
            LoginResponseDto responseDto
                    = new LoginResponseDto(true,  "null");
            return gson.toJson(responseDto);
        });

        path( "/api", () -> {
        get( "/users", (req, res) -> {
            //put more stuff here
                return "Test";
            });

        post("/addNote", (req, res) -> {
            String bodyString = req.body();
//            converts plain Json string to gson
            AddNotesDto notesDto = gson.fromJson(bodyString, AddNotesDto.class);
            notes.add(notesDto.note);
            System.out.println(bodyString);
            System.out.println(notes.size());
            return "OK";
        });

        get("/getAllNotes", (req, res) ->{
            NotesListDto list = new NotesListDto(notes);
            return gson.toJson(list);
        });
        });
    }
}