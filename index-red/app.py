# coding: utf-8
import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define,options
define("port",default=8080,help="run on the given port",type=int) 

class IndexHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('index.html')
		#self.render里面可以传入参数

class LayoutHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('layout.html')

class GoodsHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('goods.html')

class BannerModule(tornado.web.UIModule):
	def render(self):
		return self.render_string('modules/_banner.html')
		#作为UIModule需要返回模板

if __name__ == "__main__":
	tornado.options.parse_command_line() #解析命令行
	app = tornado.web.Application(
		    handlers=[(r"/",IndexHandler),
		    		  (r"/layout",LayoutHandler),
		    		  (r"/goods",GoodsHandler)],
		    		#让tornado保存括号里面的字符串，如果正则表达式中有一系列额外的括号，
		    		#匹配的字符串将被按照在正则表达式中出现的顺序作为额外的参数传递进来。 
		    static_path = os.path.join(os.path.dirname(__file__), "static"),
			template_path = os.path.join(os.path.dirname(__file__),"tmp"),
			ui_modules = {'Banner':BannerModule},
			debug = True
			)
			#设置模板文件路径
	#创建一个tornado对象实例
	http_server = tornado.httpserver.HTTPServer(app)
	http_server.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()
