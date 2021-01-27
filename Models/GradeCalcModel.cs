using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAssignment.Models
{
    public class GradeCalcModel
    {
        [Range(0,100)]
        public int assignment { get; set; }
        [Range(0, 100)]
        public int groupProject { get; set; }
        [Range(0, 100)]
        public int quiz { get; set; }
        [Range(0, 100)]
        public int exam { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
