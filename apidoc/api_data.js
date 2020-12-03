define({ "api": [
  {
    "type": "post",
    "url": "/api/create",
    "title": "Create User",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile number of user</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "address",
            "description": "<p>address of user</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "geometry",
            "description": "<p>geometrical location of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tmobile: \"string\",\n\t\t\t\t\t\tcreatedAt: \"string\",\n\t\t\t\t\t\tupdatedAt:\"string\"\n\t\t\t\t\t\tauthor: \"string\",\n\t\t\t\t\t\tgeometry: object,\n\t\t\t\t\t\taddress: object,\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"error message,\n\t    \"status\": 422,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "create",
    "name": "PostApiCreate"
  },
  {
    "type": "delete",
    "url": "/delete/:id",
    "title": "Delete user by _id",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tmobile: \"string\",\n\t\t\t\t\t\tcreatedAt: \"string\",\n\t\t\t\t\t\tupdatedAt:\"string\"\n\t\t\t\t\t\tauthor: \"string\",\n\t\t\t\t\t\tgeometry: object,\n\t\t\t\t\t\taddress: object,\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"error message,\n\t    \"status\": 422,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "delete",
    "name": "DeleteDeleteId"
  },
  {
    "type": "update",
    "url": "/update/:id",
    "title": "Update user by _id",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tmobile: \"string\",\n\t\t\t\t\t\tcreatedAt: \"string\",\n\t\t\t\t\t\tupdatedAt:\"string\"\n\t\t\t\t\t\tauthor: \"string\",\n\t\t\t\t\t\tgeometry: object,\n\t\t\t\t\t\taddress: object,\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"error message,\n\t    \"status\": 422,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "update",
    "name": "UpdateUpdateId"
  }
] });
