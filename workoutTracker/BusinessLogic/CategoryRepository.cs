using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class CategoryRepository
    {

        public List<workout_category> ListAllCategory()
        {
            try
            {

                WorkoutAppEntities db = new WorkoutAppEntities();

                return db.workout_category.ToList();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        //AddCategory
        public void AddCategory(workout_category item)
        {
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                db.workout_category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        //DeleteCategory
        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter the category id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                var ObjCategory = (from obj in db.workout_category
                                   where obj.category_id == Id
                                   select obj).First();
                db.workout_category.Remove(ObjCategory);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //EditCategory
        public void EditCategory(workout_category item)
        {

            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                var ObjCategory = (from obj in db.workout_category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjCategory.category_name = item.category_name;

                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //get api/Category
        public workout_category Get(int id)
        {
            workout_category objWork = null;

            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                objWork = (from obj in db.workout_category
                           where obj.category_id == id
                           select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }

            

    }






}


