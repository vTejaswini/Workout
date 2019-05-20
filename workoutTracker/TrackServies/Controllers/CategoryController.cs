using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogic;


namespace TrackServies.Controllers
{
    public class WorkController : ApiController
    {
        WorkoutAppEntities db = new WorkoutAppEntities();

        public IHttpActionResult Get()
        {
            var ObjRepository = new CategoryRepository();
            return Ok(ObjRepository.ListAllCategory());
        }


        public IHttpActionResult Post(workout_category item)
        {

            db.workout_category.Add(item);
            int NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("Failed To add workout");
            }

        }

        public IHttpActionResult Get(int id)
        {
            if (id < 0)
            {
                return BadRequest("Invalid workoutid number ");
            }
            var Obj = db.workout_category.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            return Ok(Obj);
        }

        public IHttpActionResult Put(workout_category obj)
        {
            db.workout_category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;

            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("Failed To Modify supplier");
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var Obj = db.workout_category.Find(id);
            if (Obj == null)
            {
                return NotFound();
            }
            db.workout_category.Remove(Obj);
            var NoOfRowsAffected = db.SaveChanges();
            if (NoOfRowsAffected > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("Failed to Delete workout");
            }
        }


    }
}
    
