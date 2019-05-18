using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class CategoryRepository
    {
        public static void listcategory()
        {
            try
            {
                var Obj = new WorkoutAppEntities();
                var Query = from obj in Obj.workout_category

                            select obj;
                foreach (workout_category cat in Query)
                {
                    Console.WriteLine("Id={0}, Name={1}", cat.category_id, cat.category_name);
                }


            }
            catch (Exception ex)
            {
            }
        }


       
   } 

}
