class Ingredient < ActiveRecord::Base
  attr_accessible :name, :fodmap

  validates :name, :presence =>  true, :length => { :maximum => 200 }
  validates :fodmap, :presence =>  true, inclusion: { in: [true, false] }, exclusion: { in: [nil] }
end
