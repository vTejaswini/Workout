using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using NUnit.Framework;
using BusinessLogic;

namespace BusinessLogicTest1
{
    [TestFixture]
    public class CategoryTest
    {
        [Test]
        public static void listcategory()
        {

            var obj = new CategoryRepository();
            var expected = 0;
            var actual = obj.ListAllCategory().Count();
            Assert.AreEqual(expected, actual);

        }

    }
}

