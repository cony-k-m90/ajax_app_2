class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end
  def create
    Post.create(content: params[:content], checked: false)#メモ作成時に"未読"の情報を保存
    render json:{ post: post }#Ajaxを実現するためレスポンスをjsonにしている
  end
  def checked
    post = Post.find(params[:id])
    if post.checked #checkedカラムのパラメーターがtrueであるか
      post.update(checked: false)#trueだったらfalseに更新
    else
      post.update(checked: true)#falseだったらtrueに更新
    end

    item = Post.find(params[:id])# 更新したレコードをitem = Post.find(params[:id])で取得し直し
    render json: { post: item }# JSON形式（データ）としてchecked.jsに返却しています。
  end
end