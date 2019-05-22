using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogic;
namespace TrackerServies.Controllers
{
    public class WorkoutController : ApiController
    {

        WorkoutAppEntities obj = new WorkoutAppEntities();
        public IHttpActionResult Get()
        {
            return Ok(obj.workout_collection.ToArray());
        }
        public IHttpActionResult Get(int? id)
        {
            var data = obj.workout_collection.Find(id);
            return Ok(data);
        }
        public IHttpActionResult Post(workout_collection obj1)
        {
            obj.workout_collection.Add(obj1);
            var r = obj.SaveChanges();
            if (r > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("not exist");
            }

        }
        public IHttpActionResult Put(workout_collection obj1)
        {
            obj.workout_collection.Attach(obj1);
            obj.Entry(obj1).State = System.Data.Entity.EntityState.Modified;
            var r = obj.SaveChanges();
            if (r > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("not exust");
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var o = obj.workout_collection.Find(id);
            if (o == null)
            {
                return NotFound();
            }
            obj.workout_collection.Remove(o);
            int r = obj.SaveChanges();
            if (r > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("not");
            }
        }

    }
}
