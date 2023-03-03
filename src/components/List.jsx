import React from 'react';
import ReactPlayer from 'react-player';

function List() {
  return (
    <div className="about">
      <div class="container">
        <div class="d-flex flex-column">
          <div class="p-2">
            <h1 class="font-weight-heavy">List</h1>
          </div>
          <div class="d-flex flex-row">
            <div class="p-2">
            <video id="video-screen" src='localhost:8080/api/media/download/3/video' width="720px" height="480px" controls></video>
            </div>
            <div class="p-2">
              <div className="d-flex"> <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="Logo" /> <div className="">  <div classaName="p-2">Flex item</div>
                <div classaName="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;