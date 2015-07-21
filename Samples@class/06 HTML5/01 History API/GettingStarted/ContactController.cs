using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GettingStarted
{
    public class ContactController : ApiController
    {
        public Contact[] Get()
        {
            return new Contact[]
            {
                new Contact(){id=1, name="Ori"},
                new Contact(){id=2, name="Roni"},
            };
        }

        public void Post(Contact contact)
        {
        }
    }

    public class Contact
    {
        public int id { get; set; }
        public string name { get; set; }
    }
}