import { Tool } from '@framework/system/src/models/tool'

export const toolTags = [
	'VSCode',
	'development',
	'testing',
	'database',
	'API testing',
] as const

export const tools: Tool<(typeof toolTags)[number]>[] = [
	{
		name: 'Postman',
		author: 'Postman, Inc.',
		description:
			'Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
		image:
			'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',
		href: 'https://postman.com',
		tags: ['API testing'],
	},
	{
		name: 'Insomnia REST',
		author: 'Kong Inc.',
		description:
			'Leading Open Source API Client, and Collaborative API Design Platform for REST, SOAP, GraphQL, and GRPC',
		image: 'https://insomnia.rest/images/insomnia-logo.svg',
		href: 'https://insomnia.rest/',
		tags: ['API testing'],
	},
	{
		name: 'TypeORM',
		author: 'TypeORM',
		description:
			'ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.',
		image:
			'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png',
		href: 'https://typeorm.io/',
		tags: ['database'],
	},
	{
		name: 'Bookshelf.js',
		author: 'Tim Griesser',
		description:
			'A simple Node.js ORM for PostgreSQL, MySQL and SQLite3 built on top of Knex.js',
		image: 'https://bookshelfjs.org/images/bookshelf-icon-inverted.svg',
		href: 'https://bookshelfjs.org',
		tags: ['database'],
	},
	{
		name: 'Objection.js',
		author: 'Sami Koskimäki',
		description:
			'Objection.js is an ORM (opens new window)for Node.js (opens new window)that aims to stay out of your way and make it as easy as possible to use the full power of SQL and the underlying database engine while still making the common stuff easy and enjoyable.',
		image: '', // could not find a logo
		href: 'https://vincit.github.io/objection.js/',
		tags: ['database'],
	},
	{
		name: 'Waterline',
		author: 'Mike McNeil & The Sails Company',
		description:
			'Waterline is a new kind of storage and retrieval engine. It provides a uniform API for accessing stuff from different kinds of databases, protocols, and 3rd party APIs. That means you write the same code to get and store things like users, whether they live in Redis, mySQL, LDAP, MongoDB, or Postgres.',
		image: 'https://waterlinejs.org/images/waterline-logo.png',
		href: 'https://waterlinejs.org/',
		tags: ['database'],
	},
	{
		name: 'Knex.js',
		author: 'Tim Griesser',
		description:
			'A query builder for PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 and Oracle, designed to be flexible, portable, and fun to use.',
		image: 'https://knexjs.org/knex-logo.png',
		href: 'https://knexjs.org',
		tags: ['database'],
	},
	{
		name: 'Mongodb Compass',
		author: 'MongoDB, Inc.',
		description:
			'Compass is an interactive tool for querying, optimizing, and analyzing your MongoDB data. Get key insights, drag and drop to build pipelines, and more.',
		image:
			'https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png',
		href: 'https://www.mongodb.com/products/compass',
		tags: ['database'],
	},
	{
		name: 'Sequel Pro',
		author: 'Sequel Pro & CocoaMySQL Teams',
		description:
			'Sequel Pro is a fast, easy-to-use Mac database management application for working with MySQL & MariaDB databases.',
		image: 'https://sequelpro.com/images/logo.png',
		href: 'https://sequelpro.com/',
		tags: ['database'],
	},
	{
		name: 'MySQL Workbench',
		author: 'Oracle',
		description:
			'MySQL Workbench is a unified visual tool for database architects, developers, and DBAs. MySQL Workbench provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, and much more. MySQL Workbench is available on Windows, Linux and Mac OS X.',
		image:
			'https://pbs.twimg.com/profile_images/621577553376100352/lvR3kClO_400x400.png',
		href: 'https://www.mysql.com/products/workbench/',
		tags: ['database'],
	},
	{
		name: 'pgAdmin',
		author: 'The pgAdmin Development Team',
		description:
			'pgAdmin is the most popular and feature rich Open Source administration and development platform for PostgreSQL, the most advanced Open Source database in the world.',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
		href: 'https://www.pgadmin.org/',
		tags: ['database'],
	},
	{
		name: 'Quokka',
		author: 'Wallaby Pty Ltd',
		description:
			'Quokka makes exploring, learning, and testing JavaScript / TypeScript blazingly fast. By default no config is required, simply open a new Quokka file and start experimenting. Focus on writing code instead of writing bespoke config files just to try a simple idea or learn a new language feature.',
		image:
			'https://ph-files.imgix.net/9ae1a85d-4096-429c-95cc-5c7cff7fcdad.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=64&h=64&fit=crop&frame=1&dpr=1',
		href: 'https://quokkajs.com/',
		tags: ['VSCode', 'development', 'testing'],
	},
	{
		name: 'NVM',
		author: 'Tim Caswel, Jordan Harband',
		description:
			'nvm allows you to quickly install and use different versions of node via the command line.',
		image:
			'https://raw.githubusercontent.com/nvm-sh/logos/HEAD/nvm-logo-color.svg',
		href: 'https://github.com/nvm-sh/nvm',
		tags: ['development'],
	},
	{
		name: 'nodist',
		author: 'Marcel Klehr',
		description:
			'A node.js and npm version manager for the windows folks out there. Inspired by n. And nodenv.',
		image: '', // could not find a logo
		href: 'https://github.com/nullivex/nodist',
		tags: ['development'],
	},
]
