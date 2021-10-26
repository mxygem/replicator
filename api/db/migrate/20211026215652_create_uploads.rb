class CreateUploads < ActiveRecord::Migration[6.1]
  def change
    create_table :uploads do |t|
      t.string :title
      t.text :config

      t.timestamps
    end
  end
end
