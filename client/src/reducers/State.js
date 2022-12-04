import React, { useState, useEffect } from 'react';
import Admin from '../pages/Admin/Admin';
import Config from '../pages/Admin/Config';
import Apply from '../pages/Admin/Apply';
import axios from 'axios';
import RingLoader from 'react-spinners/RingLoader';

const State = ({ component }) => {

  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const token = "Bearer "+localStorage.getItem("jwt")
    const config = {
      headers: {
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }

    const getName = () => {
      axios.get(`/users/admin`, config)
        .then(res => {
          setSlug(res.data.slug);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
    }
    getName();
  }, [slug]);

  const toggle = (component) => {
    switch (component) {
      case 'admin':
        return <Admin slug={slug} />
      case 'config':
        return <Config slug={slug} />
      case 'apply':
        return <Apply slug={slug} />
      default:
        return null;
    }
  }

  return (loading) ? <div className="light-container"><div className="loader"><RingLoader sizeUnit={"px"} size={150} color={'rgb(31, 28, 28)'} loading={true}/></div></div> :
  (
    <div className="light-container">
      {toggle(component)}
    </div>
  )
}

export default State
