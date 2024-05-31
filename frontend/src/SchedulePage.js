import React from 'react';
import './SchedulePage.css';
import image from './image.png'; // Pastikan path ini benar

const SchedulePage = () => {
  const scheduleData = [
    {
      image: image,
      rating: 8.9,
      title: 'Daily',
      address: 'Jl. Lorem Ipsum Dolor Sit Amet Bandung No. 123',
      distance: '5 km',
      times: ['07.00', '12.00', '17.00'],
    },
    {
      image: image,
      rating: 8.9,
      title: 'Senin-Kamis',
      address: 'Jl. Lorem Ipsum Dolor Sit Amet Bandung No. 123',
      distance: '5 km',
      times: ['08.15', '14.00', '19.30'],
    },
    {
      image: image,
      rating: 8.9,
      title: 'Minggu',
      address: 'Jl. Lorem Ipsum Dolor Sit Amet Bandung No. 123',
      distance: '5 km',
      times: ['07.00', '12.00', '17.00', '21.00'],
    },
  ];

  return (
    <div className="schedule">
      <div className="frame221">
        <h1 className="buatJadwal">Buat Jadwal</h1>
      </div>
      <div className="frame220">
        {scheduleData.map((item, index) => (
          <div key={index} className="cardSearchResult">
            <div className="group1706">
              <div
                className="bali1"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="frame202">
                <span className="rating">{item.rating}</span>
                <div className="star"></div>
              </div>
            </div>
            <div className="frame200">
              <div className="frame201">
                <div className="title">{item.title}</div>
                <div className="address">{item.address}</div>
                <div className="distance">{item.distance}</div>
                <div className="times">
                  {item.times.map((time, idx) => (
                    <div key={idx} className="time">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bookmark"></div>
            </div>
            <div className="selectSchedule">Pilih Jadwal</div>
          </div>
        ))}
      </div>
      <div className="addSchedule">
        <div className="plusIcon">+</div>
      </div>
    </div>
  );
};

export default SchedulePage;
