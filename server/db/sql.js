
var task = {  
    insert:'INSERT INTO task(task_id,author_id,place_start,place_arrive,pkg_datetime,task_award,task_note,pkg_recipient,pkg_recipient_contact,pkg_code,create_time,task_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',  
    queryAll:'SELECT `user`.nickname, `user`.avatar_url,`task`.* FROM `task` INNER JOIN `user` ON `task`.author_id = `user`.id ORDER BY `task`.pkg_datetime',
    updateTaskStatus:'UPDATE `task` SET `task_status` = ? WHERE `task_id` = ?',
    queryTaskPublish: 'SELECT `user`.nickname, `user`.avatar_url, `task`.* FROM `task` INNER JOIN `user` ON `task`.author_id = `user`.id WHERE `task`.author_id = ?',
    queryTaskPick: 'SELECT `user`.nickname, `user`.avatar_url, `task`.* FROM `task` INNER JOIN `user` ON `task`.author_id = `user`.id INNER JOIN `order` ON `task`.`task_id` = `order`.`task_id` WHERE `order`.`courier_id` =?',
    queryAuthorById: 'SELECT `id`, `nickname`, `avatar_url` FROM `user` WHERE `id` = ?',
    queryTaskByTaskId: 'SELECT * FROM `task` WHERE `task_id` = ? ',
    queryTaskDetailByTaskId: 'SELECT * FROM `task` INNER JOIN `user` ON task.author_id = `user`.id WHERE task.task_id= ?',
};

var stu = {
	insert:'INSERT INTO `stu_info`(id,stu_name,stu_id,phone,stu_id_card_url,stu_campus_card_url,submit_time,auth_status) VALUES (?,?,?,?,?,?,?,?)',
	queryById:'SELECT * FROM stu_info WHERE id = ?', 
};

var user = {
	insert:'INSERT INTO user(id,open_id,session_key,nickname,avatar_url,create_time,last_visit_time,stu_auth_status) SELECT ?,?,?,?,?,?,?,? FROM DUAL WHERE NOT EXISTS (SELECT * FROM user WHERE user.open_id = ?)',
	queryByOpenId:'SELECT * FROM user WHERE open_id = ?',
	queryCourierByUserId: 'SELECT `user`.`id`, `user`.`nickname`, `user`.`avatar_url`, `stu_info`.`phone` FROM `user` INNER JOIN `stu_info` ON `user`.`id` = `stu_info`.`id`  WHERE `user`.`id` = ?',

}

var order = {
	insert:'INSERT INTO `order`(order_id,task_id,author_id,courier_id,create_time,order_status) VALUES (?,?,?,?,?,?) ',
	updateOrderStatus:'UPDATE `order` SET `order_status` = ? WHERE `task_id` = ?',
	queryByTaskId: 'SELECT * FROM `order` WHERE `task_id` = ?'
}
    
module.exports = {
	user: user,
	stu: stu,
	task: task,
	order: order
}