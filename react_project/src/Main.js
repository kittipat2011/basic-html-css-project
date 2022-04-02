import React from "react";
import axios from "axios";

function Main() {

    function searchSong(){
        
        var songName = document.getElementById("songName").value;
        var round = 0;
        if(songName === ""){
            alert("Please input Song Name");
        }else{

            deleteChild();

            var songResult = [];

            axios.get("http://localhost:3000/songsname/"+songName).then((res) => {
                songResult = res.data.result;
                round = songResult.length

                const row = document.getElementById("rowTable");
                for (let i = 0 ; i < round ; i++) {
                    const tr = document.createElement("tr");
        
                    const idTd = document.createElement("td");
                    const idText = document.createTextNode(songResult[i].SongID);
                    idTd.appendChild(idText);
                    tr.appendChild(idTd);
        
                    const nameTd = document.createElement("td");
                    const nameText = document.createTextNode(songResult[i].SongName);
                    nameTd.appendChild(nameText);
                    tr.appendChild(nameTd);
        
                    const descriptionTd = document.createElement("td");
                    const descriptionText = document.createTextNode(songResult[i].SongDesc);
                    descriptionTd.appendChild(descriptionText);
                    tr.appendChild(descriptionTd);
        
                    row.appendChild(tr);
                }
            });
    
            
        }

        
    }

    function deleteChild() {
        var tbody = document.getElementById("rowTable");

        var child = tbody.lastElementChild; 
        while (child) {
            tbody.removeChild(child);
            child = tbody.lastElementChild;
        }
    }

  return (
    <div class="mt-5">
      <div class="my-4">
        <div class="input-group mb-3">
          <input
            type="text" 
            class="form-control" 
            placeholder="Search Song By Name" 
            id="songName"
          />
          <button onClick={searchSong} class="btn btn-primary" id="basic-addon2">
            Search
          </button>
        </div>
      </div>

      <table class="table bg-light h5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Song Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody id="rowTable">
          
        </tbody>
      </table>
    </div>
  );
}

export default Main;
